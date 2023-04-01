const API_URL = "http://localhost:8000/api";

async function httpGetPlanets() {
  try {
    const res = await fetch(`${API_URL}/planets/`);
    return await res.json();
  } catch (err) {
    console.log(err);
    return {
      ok: false,
    };
  }
}

// Load launches, sort by flight number, and return as JSON.
async function httpGetLaunches() {
  try {
    const res = await fetch(`${API_URL}/launches/`);
    const fetchedLaunches = await res.json();
    return fetchedLaunches.sort((a, b) => a.flightNumber - b.flightNumber);
  } catch (err) {
    console.log(err);
    return {
      ok: false,
    };
  }
}

// Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${API_URL}/launches/`, {
      method: "post",
      body: JSON.stringify(launch),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return {
      ok: false,
    };
  }
}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: "delete",
    });
  } catch (err) {
    console.log(err);
    return {
      ok: false,
    };
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };

// 14
