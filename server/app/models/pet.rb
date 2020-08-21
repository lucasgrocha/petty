class Pet < ApplicationRecord
  has_many_attached :pictures

  attribute :contact_infos

  belongs_to :contact

  def contact_infos
    {
      whatsapp: contact.whatsapp,
      email: contact.email
    }
  end
end
