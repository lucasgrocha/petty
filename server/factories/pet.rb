FactoryBot.define do
  factory :pet do
    owner_name { FFaker::NameBR.name }
    pet_name { FFaker::NameBR.first_name }
    description { FFaker::Lorem.paragraph }
    age { (1..20).to_a.sample }
    address { FFaker::Address.street_address }
    contact { FactoryBot.create(:contact) }
    status { rand(0..1) }

    before :create do |pet|
      tmp_dir = Rails.root.join('tmp')
      filename_images = Dir.entries('tmp/images').select { |f| !File.directory? f }

      files = []

      rand(1...5).times do
        files << File.open("#{tmp_dir}/images/#{filename_images.sample}")
      end

      pet.pictures = files

      pet.last_seen_coords = [FFaker::Geolocation.lat, FFaker::Geolocation.lng] if pet.status == 'lost'
    end
  end
end
