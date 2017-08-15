AuthRoutes

OK   GET  /login //es un post
NO   GET  /olvide-clave 
OK   POST /olvide-clave 
NO   GET  /olvide-clave-exito
NO   GET  /reiniciar-clave/{token}
OK   POST /reiniciar-clave
NO   GET  /reiniciar-clave-exito
OK   POST /login
OK   GET  /logout
?    GET  /switchuf-{functional_unit_id}

DashboardRoutes

NO   GET  /dashboard

ExpensesRoutes

SI  GET  /expensas //que nos mande las últimas 5 expensas cuando se loquea **
?   GET  /expensas/{expense}/descargar

HomeRoutes /

//Para Novedades, Documentos, Expensas, Reclamos, Reservas de Amenities:
// les pasamos dentro del objeto que les mandamos, una propiedad "cant" que defina cuantos nos pasan
    GET  /
SI  GET  /datos-utiles //que nos mande datos útiles cuando se loguea **
    GET  /cuenta-corriente
SI  GET  /novedades //que nos mande las últimas 8 novedades cuando se loguea **
    GET  /documentos
    GET  /documentos/{document}/descargar

RegisterRoutes/
// no esntra en este sprint
    GET  /R-{registerToken}
    GET  /error-no-users
    GET  /error-users-not-found
    POST /do-register
!   POST /do-register-e
    GET  /activation/{code}
    GET  /register-success
    GET  /register_success
    GET  /invite/{invitationToken}
!   POST /do-invite
!   POST /do-invite-logged
    GET  /registro
!   POST /check-pin

StaticRoutes
// si nos pueden mandar esto genial
NO  GET  /terminos-y-condiciones
NO  GET  /politicas-de-privacidad

UploadPaymentRoutes

    POST /

UserDataRoutes
// ya viene dentro del objeto usuario que recibimos al loguearnos
NO  GET  /mis-datos
NO  POST /mis-datos