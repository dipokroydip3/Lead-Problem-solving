function paginate(data, page, limit) {

  const totalItems = data.length;

  const totalPages = Math.ceil(totalItems / limit);

  // invalid page handling
  if(page < 1 || page > totalPages) {
    return {
      data: [],
      totalPages,
      currentPage: page
    };
  }

  const start = (page - 1) * limit;
  const end = start + limit;

  const paginatedData = data.slice(start, end);

  return {
    data: paginatedData,
    totalPages,
    currentPage: page,
    hasNext: page < totalPages,
    hasPrev: page > 1
  };
}

console.log(paginate(data, 3, 10));