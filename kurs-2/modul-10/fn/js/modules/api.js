const apiUrl = `https://unstats.un.org/SDGAPI/v1/sdg`;

async function fetchGoals() {
  const endpoint = `${apiUrl}/Goal/List?includechildren=false`;
  const response = await fetch(endpoint);
  const data = await response.json();

  return data;
}

async function fetchTargets(goalCode) {
  const endpoint = `${apiUrl}/Goal/${goalCode}/Target/List?includechildren=true`;
  const response = await fetch(endpoint);
  const [data] = await response.json();

  return data.targets;
}

export { fetchGoals, fetchTargets };
