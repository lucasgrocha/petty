FactoryBot.define do
  factory :pet do
    owner_name { FFaker::NameBR.name }
    pet_name { FFaker::NameBR.first_name }
    description { FFaker::Lorem.paragraph }
    age { (1..20).to_a.sample }
    location { FFaker::Address.street_address }
    contact { FactoryBot.create(:contact) }
  end
end
