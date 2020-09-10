class SearchPets
  attr_accessor :initial_scope

  def initialize(initial_scope)
    @initial_scope = initial_scope
  end

  def call(params)
    search(params)
  end

  private

  def search(params)
    search_term = params[:search_term].downcase
    search_type = params[:search_type]
    query = build_query(search_type, search_term)

    @initial_scope.where(query)
  end

  def build_query(search_type, search_term)
    return { age: search_term } if age_search?(search_type)

    "lower(address) LIKE '%#{search_term}%'"
  end

  def age_search?(search_type)
    search_type == 'age'
  end
end
