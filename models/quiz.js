// Definición del modelo de Quiz

modulo.exports = function(sequelize, DataTypes) {
    return sequelize.define('Quiz',
        { pregunta:  DataTypes.STRING,
	  respuesta: DataTypes.STRING,
	}
    );
}
