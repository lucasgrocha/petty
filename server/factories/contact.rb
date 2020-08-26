FactoryBot.define do
  factory :contact do
    phone_number { FFaker::PhoneNumberBR.international_mobile_phone_number }
    email {FFaker::Internet.email}
  end
end
