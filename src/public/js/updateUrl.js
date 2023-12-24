async function updateUrlVisits(shortedUrl) {
  try {
    const updateUrl = await fetch(`/api/${shortedUrl}`, {
      method: "POST",
    });

    if (updateUrl) {
      location.reload();
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  }
}
