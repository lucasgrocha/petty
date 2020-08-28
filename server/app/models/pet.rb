class Pet < ApplicationRecord
  enum status: { lost: 0, adoption: 1 }
  mount_uploaders :pictures, PetPictureUploader

  belongs_to :contact

  def contacts
    {
      phone_number: contact.phone_number,
      email: contact.email
    }
  end
end
