FactoryBot.define do
  factory :pet do
    owner_name { FFaker::NameBR.name }
    pet_name { FFaker::NameBR.first_name }
    description { FFaker::Lorem.paragraph }
    age { (1..20).to_a.sample }
    location { FFaker::Address.street_address }
    contact { FactoryBot.create(:contact) }

    after :create do |pet|  
      tmp_dir = Rails.root.join("tmp")
      filename_images = Dir.entries('tmp/images').select { |f| !File.directory? f }
      file_image_name = filename_images.sample

      pet.picture.attach(io: File.open("#{tmp_dir}/images/#{file_image_name}"), filename: file_image_name)
    end
  end
end
