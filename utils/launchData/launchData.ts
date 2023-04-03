export const mapLaunchData = (data: any[]) => {
  return data.map((launch) => {
    return {
      key: launch.id,
      name: launch.name,
      status: {
        success: launch.success,
        reason: launch.failures[0] ? launch.failures[0].reason : '',
      },
      payload: launch.payload,
      date: launch.date_utc,
      core: launch.cores[0].core,
      image: launch.links.patch.small,
    };
  });
};
