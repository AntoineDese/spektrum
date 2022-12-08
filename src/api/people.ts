type PeopleDataResponse = {
  name: string;
  birth_year: string;
  eye_color: string;
  vehicles: string;
  created: string;
};

export const getPeople = (personId: number): Promise<PeopleDataResponse> => {
  return fetch(`https://swapi.py4e.com/api/people/${personId}/`).then(
    (response) => response.json()
  );
};
