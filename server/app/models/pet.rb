class Pet < ApplicationRecord
  has_one_attached :picture

  attribute :contact_infos

  belongs_to :contact

  def contact_infos
    {
      whatsapp: contact.whatsapp,
      email: contact.email
    }
  end
end
