const btnEntrar =
document.getElementById("btnEntrar");

btnEntrar.addEventListener(
    "click",
    entrarClase
);

function entrarClase(){

    const nombre =
    document
    .getElementById("nombre")
    .value
    .trim();

    if(nombre === ""){

        alert(
            "Por favor escribe tu nombre."
        );

        return;
    }

    document
    .getElementById("inicio")
    .style
    .display = "none";

    document
    .getElementById("jaas-container")
    .style
    .display = "block";

    new JitsiMeetExternalAPI(

        "8x8.vc",

        {

            roomName:
            "vpaas-magic-cookie-3734582b14db4076a2f4ae0215aeb8db/ClaseMusica2026",

            parentNode:
            document.querySelector(
                "#jaas-container"
            ),

            userInfo:{
                displayName:nombre
            },

            configOverwrite:{

                prejoinPageEnabled:false
            },

            interfaceConfigOverwrite:{

                SHOW_JITSI_WATERMARK:false
            }
        }
    );
}