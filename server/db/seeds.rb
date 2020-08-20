tmp_dir = Rails.root.join("tmp")

filename_images = %w(dog1 dog2 bird1 cat1)

10.times do
  file_image_name = filename_images.sample

  FactoryBot.create(:pet)
  .picture.attach(io: File.open("#{tmp_dir}/images/#{file_image_name}.jpg"), filename: file_image_name)
end