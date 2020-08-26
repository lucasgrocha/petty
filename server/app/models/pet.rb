class Pet < ApplicationRecord
  enum status: { lost: 0, adoption: 1 }
  mount_uploaders :pictures, PetPictureUploader

  # has_many_attached :pictures

  attribute :contacts

  belongs_to :contact

  def contacts
    {
      whatsapp: contact.whatsapp,
      email: contact.email
    }
  end
end
