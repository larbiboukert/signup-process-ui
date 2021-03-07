export async function sendCheckout(body) {
  try {
    const resp = await fetch("https://signup.invtech.dev/signup/checkout", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });
    return await resp;
  } catch (e) {
    console.error(e);
  }
}

export async function fetchPlans() {
  try {
    // const resp = await fetch("http://localhost:3000/signup/plans");
    const resp = await fetch("http://localhost:3000/fake-data/plans.json");
    return await resp.json();
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function sendLead(body) {
  try {
    const resp = await fetch("https://signup.invtech.dev/signup/lead", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });
    return await resp.json();
  } catch (e) {
    console.error(e);
  }
}
