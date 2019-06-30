const show = (sequelize, DataTypes) => {
  const Show = sequelize.define('show', {
    name: DataTypes.STRING,
    network: DataTypes.STRING,
    weekday: DataTypes.STRING,
    showtime: DataTypes.TIME
  });

  Show.associate = models => {
    Show.belongsTo(models.User);
  };

  return Show;
};

export default show;