using System;
using System.Web;

namespace Portal.Assets.pages.scripts
{
    public class Universales : IHttpModule
    {
        /// <summary>
        /// Deberá configurar este módulo en el archivo Web.config de su
        ///  web y registrarlo en IIS para poder usarlo. Para obtener más información
        ///  vea el siguiente vínculo: http://go.microsoft.com/?linkid=8101007
        /// </summary>
        #region IHttpModule Members

        public void Dispose()
        {
            //Ponga aquí el código de limpieza.
        }

        public void Init(HttpApplication context)
        {
            // El siguiente es un ejemplo de cómo se puede controlar el evento LogRequest y proporcionar 
            // una implementación de registro personalizado para él
            context.LogRequest += new EventHandler(OnLogRequest);
        }

        #endregion

        public void OnLogRequest(Object source, EventArgs e)
        {
            //Aquí puede poner la lógica de registro personalizado
        }
    }
}
