class Database {
	constructor( connection ) {
			this.connection = connection;
	}
	query( sql, args ) {
			return new Promise( ( resolve, reject ) => {
					this.connection.query( sql, args, ( err, rows ) => {
							if ( err )
									return reject( err );
							resolve( rows );
					} );
			} );
	}
	close() {
			return new Promise( ( resolve, reject ) => {
					this.connection.end( err => {
							if ( err )
									return reject( err );
							resolve();
					} );
			} );
	}
}

module.exports = Database;