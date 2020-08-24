class Pet < ApplicationRecord
  has_many_attached :pictures

  attribute :contacts

  belongs_to :contact

  def contacts
    {
      whatsapp: contact.whatsapp,
      email: contact.email
    }
  end
end
