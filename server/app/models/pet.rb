class Pet < ApplicationRecord
  attribute :contact_infos

  belongs_to :contact

  def contact_infos
    {
      whatsapp: contact.whatsapp,
      email: contact.email
    }
  end
end
