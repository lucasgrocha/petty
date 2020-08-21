json.array!(@pets) do |pet|
  json.id pet.id
  json.owner_name pet.owner_name
  json.pet_name pet.pet_name
  json.description pet.description
  json.age pet.age
  json.location pet.location
  json.contact_infos pet.contact_infos
  json.pictures_url pet.pictures.map { |pic| polymorphic_url(pic) }
end
