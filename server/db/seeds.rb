tmp_dir = Rails.root.join("tmp")

filename_images = %w(dog1 dog2 bird1 cat1)

10.times do
  FactoryBot.create(:pet)
  .picture.attach(io: File.open("#{tmp_dir}/images/#{filename_images.sample}.jpg"), filename: 'dog1')
end