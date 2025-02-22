export function storeItem(name, payload) {
  if (!name || typeof payload !== "object") {
    console.log("You have not sent me what I need!");
    return;
  }

  const payloadAsString = JSON.stringify(payload);
  localStorage.setItem(name, payloadAsString);
}

export function getItem(name) {
  return JSON.parse(localStorage.getItem(name));
}
