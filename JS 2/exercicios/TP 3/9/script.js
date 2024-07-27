for (let hour = 0; hour < 24; hour ++) {
    for (let minute = 0; minute < 60; minute ++) {
      const formattedHour = hour.toString().padStart(2, "0");
      const formattedMinute = minute.toString().padStart(2, "0");
      console.log(`${formattedHour}:${formattedMinute}`);
    }
  };