self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type: "window" }).then(list => {
    for (const client of list) {
      if (client.focus) return client.focus();
    }
    return clients.openWindow("/");
  }));
});
