var Contrato = function () {
    var NameTable, dprFromItem, dprToItem, ddlAnio, ddlAlmacen, dllProveedor, dllContrato, dllMotivo,IdGen;
    var IsRequest = false;
    var Tabla = 1;
    //eslint eqeqeq: ["error", "smart"]
    
    var a = function (IdControl, Tabla) {
        if (IsRequest == false) {
            IsRequest = true;
        if (Tabla == 3) {
            Tabla = 2;

            $("#AlmacenId1").select2("val", "");
            $("#ProveedorId1").select2("val", "");
            $("#ContratoId1").select2("val", "");
            $("#motivo_pedido").val("");
            o("alert-Almacen");
            o("alert-Proveedor");
            o("alert-Contrato");
            o("alert-Motivo");
            o("alert-Cantidad");
            o("EntradaClaves");
            o("footer-NP");
        }

        if (Tabla == 2) {
            if (IdControl == "ProveedorId1") {
                $("#ContratoId1").select2("val", "");
            }
            if ((dllContrato != "" && dllContrato != null) && (dllProveedor != "" && dllProveedor != null)) {
                App.blockUI({ target: "#EntradaClaves", boxed: !0, message: "Procesando…" });
            }

            if (dllContrato == "" || dllContrato == null) {
                o("EntradaClaves");
                o("footer-NP");
            } 

            NameTable = "NuevoPedido";
            b("InitializeSub", IdControl, Tabla);
           
        } else if (Tabla == 1) {
            
            
                if (document.getElementById("AniosId") && (IdControl == "dpRange")) {
                    $("#AniosId").select2("val", "");
                }
                if (document.getElementById("AlmacenId") && ((IdControl == "dpRange") || (IdControl == "AniosId"))) {
                    $("#AlmacenId").select2("val", "");
                }
                if (document.getElementById("ProveedorId") && ((IdControl == "dpRange") || (IdControl == "AniosId") || (IdControl == "AlmacenId"))) {
                    $("#ProveedorId").select2("val", "");
                }
                if (document.getElementById("ContratoId") && ((IdControl == "dpRange") || (IdControl == "AniosId") || (IdControl == "AlmacenId") || (IdControl == "ProveedorId"))) {
                    $("#ContratoId").select2("val", "");
                }
                ddlAnio = null;
                ddlAlmacen = null;
                dllProveedor = null;
                dllContrato = null;
                dllMotivo = null;
                dprFromItem = $("#dprFrom").val();
                dprToItem = $("#dprTo").val();
            
                App.blockUI({ target: "#Entradas_Portlet", boxed: !0, message: "Procesando…" });
                NameTable = window.location.pathname.split('/').length > 2 ? window.location.pathname.split('/')[2].toLowerCase() : "";
                b("Initialize", IdControl, Tabla);
            }
        }
    },
        b = function (Command, IdControl, Tabla) {
            switch (Command) {
                case "Initialize":
                    if (document.getElementById("AniosId") && ((IdControl == "dpRange"))) {
                        c("GetAnios", $("#AniosId"), IdControl, Tabla);
                    }
                    else {
                        b("GetAnios", IdControl, Tabla);
                    }
                    break;

                case "GetAnios":
                    ddlAnio = document.getElementById("AniosId") ? $("#AniosId").val() : null;
                    if (document.getElementById("AlmacenId") && ((IdControl == "dpRange") || (IdControl == "AniosId"))) {
                        c("GetAlmacen1", $("#AlmacenId"), IdControl, Tabla);
                    }
                    else {
                        b("GetAlmacen1", IdControl, Tabla);
                    }
                    break;

                case "GetAlmacen1":
                    if (Tabla == 2) {
                        dllAlmacen = $("#AlmacenId1").val();
                        if ((document.getElementById("ProveedorId1") && (IdControl != "ProveedorId1") && (IdControl != "ContratoId1")) || (IdControl == "AlmacenId1") && (IdControl != "motivo_pedido")) {
                            c("GetProveedorContrato", $("#ProveedorId1"), IdControl, Tabla);
                        }
                        else {
                            b("GetProveedorContrato", IdControl, Tabla);
                        }

                    } else {
                        ddlAlmacen = document.getElementById("AlmacenId") ? $("#AlmacenId").val() : null;
                        if (document.getElementById("ProveedorId") && ((IdControl == "dpRange") || (IdControl == "AniosId"))) {
                            c("GetProveedorContrato", $("#ProveedorId"), IdControl, Tabla);
                        }
                        else {
                            b("GetProveedorContrato", IdControl, Tabla);
                        }
                    }
                    break;
                case "GetProveedorContrato":
                    if (Tabla == 2) {
                        dllProveedor = document.getElementById("ProveedorId1") ? $("#ProveedorId1").val() : null;
                        if ((document.getElementById("ContratoId1") && (IdControl != "ContratoId1")) || (IdControl == "ProveedorId1") || (IdControl == "AlmacenId1") && (IdControl != "motivo_pedido")) {
                            c("GetContratoContrato", $("#ContratoId1"), IdControl, Tabla);
                        }
                        else {
                            b("GetContratoContrato", IdControl, Tabla);
                        }

                    } else {
                        dllProveedor = document.getElementById("ProveedorId") ? $("#ProveedorId").val() : null;
                        if (document.getElementById("ContratoId") && ((IdControl == "dpRange") || (IdControl == "ProveedorId") || (IdControl == "AniosId"))) {
                            c("GetContratoContrato", $("#ContratoId"), IdControl, Tabla);
                        }
                        else {
                            b("GetContratoContrato", IdControl, Tabla);
                        }
                    }
                    break;
                case "GetContratoContrato":
                    if (Tabla == 2) {
                        dllContrato = document.getElementById("ContratoId1") ? $("#ContratoId1").val() : null;
                        if ((dllContrato != "" && dllContrato != null) && (dllProveedor != "" && dllProveedor != null)) {
                                NP = 2;
                                NameTable = "Clasific";
                                g("GetCampo", "Clasific", IdControl);
                                NameTable = "Tipo";
                                g("GetCampo", "Tipo", IdControl);
                                NameTable = "Proveedor";
                                g("GetCampo", "IDProveedor", IdControl); 
                                if ($("input[type='hidden'][id$='Generador']").val() == "") {
                                    NameTable = "Generador";
                                    g("GetCampo", "Generador", "");
                                }
                                NameTable = "NuevoPedido";
                            var DataColums = [{ data: "Clave" }, { data: "Descripcion" }, { data: "Cantidad" }];
                            d("GetTablaClaves", $("#TableClaves"), DataColums, 2, Tabla);
                            m("EntradaClaves");
                            m("footer-NP");
                        } else {
                            b("Salte", IdControl, Tabla)
                        }
                    } else {
                        dllContrato = $("#ContratoId").val();
                        switch (NameTable) {
                            case "contrato":
                                var DataColums = [{ data: "Almacen" }, { data: "Proveedor" }, { data: "Contrato" }, { data: "Monto" }];
                                d("GetTablaMontoContrato", $("#TableMonto"), DataColums, 3, Tabla);
                                break;
                            case "pedidos":
                                var DataColums = [{ data: "Fecha" }, { data: "Almacen" }, { data: "Pedido" }, { data: "Proveedor" }, { data: "Contrato" }, { data: "Claves" }, { data: "Piezas" }, { data: "Detalle" }, { data: "Status" }];
                                d("GetTablaPedidos", $("#TableMonto"), DataColums, 8, Tabla);
                                break;
                        }
                    }
                    break;
                case "InitializeSub":
                    if ((document.getElementById("AlmacenId1") && (IdControl != "AlmacenId1") && (IdControl != "ProveedorId1") && (IdControl != "ContratoId1") && (IdControl != "motivo_pedido"))) {
                        c("GetAlmacen1", $("#AlmacenId1"), IdControl, Tabla);
                    }
                    else {
                        b("GetAlmacen1", IdControl, Tabla);
                    }
                    break;
                default:
                    App.unblockUI("#Entradas_Portlet");
                    App.unblockUI("#EntradaClaves");
                    IsRequest = false;
                    break;
            }
        },
        c = function (Command, Control, IdControl, Tabla) {
            $.ajax({
                cache: false,
                type: "POST",
                url: "/AjaxQuerys/AjaxResponse.aspx/" + Command,
                data: JSON.stringify({ "NombreTabla": NameTable, "FechaIni": dprFromItem, "FechaFin": dprToItem, "Anio": ddlAnio, "Proveedor": dllProveedor, "Contrato": dllContrato, "Almacen": ddlAlmacen }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    Control.html('');
                    Control.append($('<option></option>').val("").html("Select"));
                    $.each(response.d, function (id, option) {
                        Control.append($('<option></option>').val(option.Id).html(option.Name));
                    });
                    b(Command, IdControl, Tabla);
                },
                failure: function (response) {
                    b(Command, IdControl, Tabla);
                }
            });
        },
        d = function (Command, Control, DataColumns, NumColumn, Tabla) {
            if ($(window).width() <= 1199) {
                resp = 0;
                domin = "<'top'lf>rt<'bottom'ip><'clear'>";
                $("#Contenedor").css('top', '0px');
            } else {
                resp = 1
                domin = "<'top'lf>rt<'bottom'ip><'clear'>";

            };
            Control.DataTable().destroy();
            var lng;
            var lngM;

            if (Tabla == 1) {
                lng = 10
                lngM = "_MENU_"
            } else {
                lng = 5
                lngM = ""
            };
            Control.DataTable({

                drawCallback: function (settings) {
                    if (settings.jqXHR != null) {
                        b(Command, Tabla);
                    }
                },
                ajax:
                    {
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "/AjaxQuerys/AjaxResponse.aspx/" + Command,
                        dataSrc: "d",
                        data: function (data) {
                            return JSON.stringify({ "NombreTabla": NameTable, "FechaIni": dprFromItem, "FechaFin": dprToItem, "Anio": ddlAnio, "Almacen": ddlAlmacen, "Proveedor": dllProveedor, "Contrato": dllContrato });
                        }
                    },
                columns: DataColumns,
                dom: domin,
                language:
                    {
                        aria:
                            {
                                sortAscending: ": activar para ordenar la columna ascendente",
                                sortDescending: ": activar para ordenar la columna descendente"
                            },
                        emptyTable: "No hay datos disponibles en la tabla",
                        info: "Resultado: _START_ al _END_ de _TOTAL_ entradas",
                        infoEmpty: "Entradas no encontradas",
                        infoFiltered: "(filtrada de _MAX_ entradas totales)",
                        lengthMenu: lngM,
                        search: "Buscar:",
                        zeroRecords: "No se encontraron registros coincidentes",
                        paginate:
                            {
                                previous: "Anterior",
                                next: "Siguiente",
                                last: "Último",
                                first: "Primero"
                            }
                    },
                //footerCallback: function (e, t, a, r, o) {
                //    var n = this.api(),
                //        c = function (e) {
                //            return "string" == typeof e ? 1 * e.replace(/[\$,]/g, "") : "number" == typeof e ? e : 0
                //        };
                //    total = n.column(NumColumn).data().reduce(function (e, t) { return c(e) + c(t) }, 0),
                //        $(n.column(NumColumn).footer()).html(total)
                //},
                buttons: [
                    { extend: "excel", className: "btn dark btn-outline" },
                    { extend: "copy", className: "btn red btn-outline" },
                    {
                        extend: "pdf", className: "btn green btn-outline", customize: function (doc) {
                            doc.content.splice(1, 0, {
                                margin: [0, 0, 0, 12],
                                alignment: 'center',
                                image: 'data:image/jpeg;base64,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AAAAAAAAAFNjbCBVbnRGI1ByY0BZAAAAAAAAAAAAEGNyb3BXaGVuUHJpbnRpbmdib29sAAAAAA5jcm9wUmVjdEJvdHRvbWxvbmcAAAAAAAAADGNyb3BSZWN0TGVmdGxvbmcAAAAAAAAADWNyb3BSZWN0UmlnaHRsb25nAAAAAAAAAAtjcm9wUmVjdFRvcGxvbmcAAAAAADhCSU0D7QAAAAAAEABIAAAAAQACAEgAAAABAAI4QklNBCYAAAAAAA4AAAAAAAAAAAAAP4AAADhCSU0EDQAAAAAABAAAAHg4QklNBBkAAAAAAAQAAAAeOEJJTQPzAAAAAAAJAAAAAAAAAAABADhCSU0nEAAAAAAACgABAAAAAAAAAAI4QklNA/UAAAAAAEgAL2ZmAAEAbGZmAAYAAAAAAAEAL2ZmAAEAoZmaAAYAAAAAAAEAMgAAAAEAWgAAAAYAAAAAAAEANQAAAAEALQAAAAYAAAAAAAE4QklNA/gAAAAAAHAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAOEJJTQQAAAAAAAACAAA4QklNBAIAAAAAAAQAAAAAOEJJTQQwAAAAAAACAQE4QklNBC0AAAAAAAYAAQAAAAQ4QklNBAgAAAAAABAAAAABAAACQAAAAkAAAAAAOEJJTQQeAAAAAAAEAAAAADhCSU0EGgAAAAADTQAAAAYAAAAAAAAAAAAAAIAAAAENAAAADABTAGkAbgAgAHQA7QB0AHUAbABvAC0AMQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAABDQAAAIAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAG51bGwAAAACAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAAIAAAAAAUmdodGxvbmcAAAENAAAABnNsaWNlc1ZsTHMAAAABT2JqYwAAAAEAAAAAAAVzbGljZQAAABIAAAAHc2xpY2VJRGxv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IHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDMtMTlUMTY6NTQ6NDItMDY6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDMtMTlUMTY6NTQ6NDItMDY6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTAzLTE5VDE2OjU0OjQyLTA2OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE0NjYwQzFDMzQ2QUVBMTE5MERFQTExRTBDRTI5OUFFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEzNjYwQzFDMzQ2QUVBMTE5MERFQTExRTBDRTI5OUFFIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MTM2NjBDMUMzNDZBRUExMTkwREVBMTFFMENFMjk5QUUiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjEzNjYwQzFDMzQ2QUVBMTE5MERFQTExRTBDRTI5OUFFIiBzdEV2dDp3aGVuPSIyMDIwLTAzLTE5VDE2OjU0OjQyLTA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTQ2NjBDMUMzNDZBRUExMTkwREVBMTFFMENFMjk5QUUiIHN0RXZ0OndoZW49IjIwMjAtMDMtMTlUMTY6NTQ6NDItMDY6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+ICQElDQ19QUk9GSUxFAAEBAAACMEFEQkUCEAAAbW50clJHQiBYWVogB88ABgADAAAAAAAAYWNzcEFQUEwAAAAAbm9uZQAAAAAAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y1BREJFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKY3BydAAAAPwAAAAyZGVzYwAAATAAAABrd3RwdAAAAZwAAAAUYmtwdAAAAbAAAAAUclRSQwAAAcQAAAAOZ1RSQwAAAdQAAAAOYlRSQwAAAeQAAAAOclhZWgAAAfQAAAAUZ1hZWgAAAggAAAAUYlhZWgAAAhwAAAAUdGV4dAAAAABDb3B5cmlnaHQgMTk5OSBBZG9iZSBTeXN0ZW1zIEluY29ycG9yYXRlZAAAAGRlc2MAAAAAAAAAEUFkb2JlIFJHQiAoMTk5OCkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAADzUQABAAAAARbMWFlaIAAAAAAAAAAAAAAAAAAAAABjdXJ2AAAAAAAAAAECMwAAY3VydgAAAAAAAAABAjMAAGN1cnYAAAAAAAAAAQIzAABYWVogAAAAAAAAnBgAAE+lAAAE/FhZWiAAAAAAAAA0jQAAoCwAAA+VWFlaIAAAAAAAACYxAAAQLwAAvpz/7gAOQWRvYmUAZEAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQEBAQECAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wAARCACAAQ0DAREAAhEBAxEB/90ABAAi/8QBogAAAAYCAwEAAAAAAAAAAAAABwgGBQQJAwoCAQALAQAABgMBAQEAAAAAAAAAAAAGBQQDBwIIAQkACgsQAAIBAwQBAwMCAwMDAgYJdQECAwQRBRIGIQcTIgAIMRRBMiMVCVFCFmEkMxdScYEYYpElQ6Gx8CY0cgoZwdE1J+FTNoLxkqJEVHNFRjdHYyhVVlcassLS4vJkg3SThGWjs8PT4yk4ZvN1Kjk6SElKWFlaZ2hpanZ3eHl6hYaHiImKlJWWl5iZmqSlpqeoqaq0tba3uLm6xMXGx8jJytTV1tfY2drk5ebn6Onq9PX29/j5+hEAAgEDAgQEAwUEBAQGBgVtAQIDEQQhEgUxBgAiE0FRBzJhFHEIQoEjkRVSoWIWMwmxJMHRQ3LwF+GCNCWSUxhjRPGisiY1GVQ2RWQnCnODk0Z0wtLi8lVldVY3hIWjs8PT4/MpGpSktMTU5PSVpbXF1eX1KEdXZjh2hpamtsbW5vZnd4eXp7fH1+f3SFhoeIiYqLjI2Oj4OUlZaXmJmam5ydnp+So6SlpqeoqaqrrK2ur6/9oADAMBAAIRAxEAPwDf49+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691//Q3+Pfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvdf/0d/j37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691gqKmmpImqKuogpYEF3mqJY4YkH9WkkZUUf6592VWchUUlvQZ6o8kcSl5HCoPMmg/aemXD7t2puGrr6DAbn29nK7FJTyZOiw+axuTq8clW0y0r19NRVM81GlS1NIIzIqhzG1r6TZ2a2ubcRm4t3jDCq6lK1HqKgV/LpPbX9jemUWd5FMYyA2h1bSTwDaSaE+QNOlD7Y6V9e9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691/9Lf49+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3RO/mD85egfhPso7m7d3Mr7jydHUzbL60wTQVu+t7VEB8dsXi2ljWhxMU/pqMlWNBQwfp8jTNHFIMOUOR9/wCdb36baLb/ABdSPEmaoijB/ibzanBFqx40AqRGPub7t8m+1O1fX8y39b6RSYLWOjXE5GOxK9qA4aVysa8KliqnVM7X/nxfOjeu5s5kOus5s3pzalZUuMFtnDbN2xu+uw+PCCOGKs3JvTC5WbLZJlXXNULTUsTysTHBEmlFyo2r2J5HsraCPcYJry6A7naR4wx86JGy6R6CrGnFic9c7OYvvge7m6393Nsl3a7XtzN+nEkEUzIvABpZ0cu3mzBUBNdKKKAFez381f8AmF7k1fxD5S9g0+q9/wCA0+19q2v9dP8Adfb+H0f7C1vYng9q/b62p4fK9uf9MXf/AI+7dR/efeI96r6vje4V6v8AzTEUP/VqNOgZyvy1+Y3YlUYsx8k/kJuOSUWNPUdtb9ko1Tm/+SLnUoYI/wAE6FUfn2o3DavbrlGwbct02zarGxX8bwxKWPog0F5G9FQMfl0m2Pf/AHy9zN3j2TYOYOYt13R/9Djurlgo/ic+II4kHm8hRB5npmbE7k3BIKzsHd24t11RbWaXJ57J5ZQ9yb1NZXVM7yN9CRH+f7fuAeavfggS2Ht5tCWdvw+qliUSH5w29NMfyaXUw4+GOsy/bz7oaK1vvHvNzJNud9UN9BBPI0KnOLi7J1y+VUtwq1qPHI63Bf5I/SdL1x8UK7seXF0tBlu6d5ZHLU8sNLHTzts7ZslRtbb1JNZRNJGmbhzFVEXJDR1oYcNqbH+8vb7crqa/3K9mub6U1eSVy7sfmTwHoBRR5AdZn7VtW1bJt1ttOybVbWW1QikcMEaxRoPkqjJPmzFnbizE9XJe03Rh1737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3X/09/j37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Sd3bjc9mNtZrFbX3K2ztwV+PqKXE7pTD0OfkwNZMuiLJw4bKEY3IzUt9SR1AaEsBrVlupUWkkENzDLdW3jW6sCyaimofw6lyAfMjPoRx6RblBeXVhdW+33/0t66EJLoWQxseDhH7WI4gNVa8QRjqnvcv8jj44dm7yzPY3ePdfyf7m35uGp+6zO4N2b82lA9Swv46aCLHbBhmoMZSIfHTUkEyU1JAqxQokaqol+297+Y9ss4du2PZdss7CMUVI4pDT5mspqTxLEVY5JJ6xkv/ALpXI2/7pdb5zbzVv+6bxO1XkmuIRX5ALbgqo4KisFRaKoAAHS921/JE/l0bfaOSt6g3DuySP6PuXtDsMq5/rJT4HcWBpH/1jHb/AA9oLn3s9xLgEJu8cQ/oQxf4WRj/AD6ObD7p/shZFTLyzPcsP9+3dz/MRyRj+XQ343+Wn/Lz2Fj6vJ/7K70/FjcVSVFfXV27MVPummpKKihepqqqrn3hX5lVgp4Imd2c2Cgk8eyG49zefrqvi81XY/0jCP8A6thehhZewXs1t9PA9u9tan+/EM3/AFeZ+tPH5Cb82h2T3R2NvLr3Zm2evNg5fcdTFsnaG0tt4raeHxGz8UseJ2zE2Fw1NS0NPkZ8NQwzVpVf3K2WVzyx9g/cNx3Hd7kXu7bjPdXQFA80jyMo9FLk6R66aV869SPs+z7Ly7YttnLuy2e37eSC0dtDHArkcGcRqusjyLVp5U6C3CYbJbizOI2/hqWSuy+dydBhsVRQjVLWZLJ1cVFQ0sQ/MlRVTqij+p9pOjHr6CHTfW2L6d6n646rw2hsd19srbm0oZ0TR97JhMXTUVVkpFsCajJ1cUlRKSLtJKxPJ976fGB0JXv3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de6/9Tf49+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691VN/OB+RP+hT4p5TZOGr2pd6d9VdR17jFglCVUGz0giq+xMiFYWlo5cLNFiJQDqU5lGH6SR49VY0HWnV71011ZN/Kf6Wqe3/md1vX1GMlrdsdUPVdpbiqvBI9LR1O24WOzhJPpMEdTLvaegkjRiGkjhkKg6Gt7raipHW6R73091737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvdf//V3+Pfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvdabv80jurO/KD5mZnY2wqXMbsw/V0p6j2Ngdv0Vdl63NbjxtVLJvatxeIx8dVNXV9duoz0iPTq5qaPHUzji1tdNMano0/xG/knbx3acXvb5V5ap2Ht1/BWU/Vu2quln3tlIj4p44tz52P7zGbWppkOmSmp/ua/SzKzUcq+/dbCevWxp1Z1B1j0ltOj2P1PsnAbF2vReqPGYKjEH3M9grVuTrpWmyOZyUoA8lVVzT1ElvU5976uABw6Ef37rfXvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691//9bf49+691737r3Xvfuvde9+691737r3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ws4jLeFcCBbmLsTxmiXw2SeB+Eq7W23vrr/BdloOut4dfZjq7H4jJ7Dx9TuPZuyKzLbu3JhMHt/P4zPYXCPR7W3DvauakjqsNPEKERUhQLH5Crn51N1c2O4T7b/uxhuFnLLKQkkgWNGZ1ZWarpGuorIDqq9c06LrP2oG3WO77NZ79/ukurJ7RUa3UywQM80sccciSJHSKSeQoHgYeHpjpQVMrdfxA3JvHcHZe7Mt2nttM93LsXKdbdimn6lWbDttSvotl4qA7PxeV3/lJcFnqTHbVnP3ORqM3A9TWLKKdFpkialpzfbWdvttpFtcngWc6zQ1n7tYMjHxGWJdSkuO1BGdKkaiWJDm4+2d9ud7v243HMMAvN0s3tbmlnVPBZYEHgo9w5jkVYW7pWnUs4bQAgUnm9gfqW+ve/de697917r3v3Xuv//T3+Pfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvdf/1N/j37r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3X/9Xf49+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691//W3+Pfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvde9+691737r3Xvfuvdf/2Q=='
                            });
                        }},
                    { extend: "excel", className: "btn yellow btn-outline " },
                    { extend: "csv", className: "btn purple btn-outline " },
                    { text: "Reload", className: "btn default", action: function (e, dt, node, config) { dt.ajax.reload(); } }],
                pagingType: "numbers",
                responsive: !resp,
                order: [[0, "desc"]],

                lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "Todo"]],
                pageLength: lng


            });
            $("#TableEntradas_tools > li > a.tool-action").on("click", function () {
                var e = $(this).attr("data-action");
                Control.DataTable().button(e).trigger()
            });
        },

        f = function () {

            var clave, cantidad, Query, total_claves;
            total_claves = 0;
            Query = "";
            
            var table = $("#TableClaves").DataTable();
            var Clasif = $("input[type='hidden'][id$='Clasific']").val();
            var Tipo = $("input[type='hidden'][id$='Tipo']").val();
            var IdProv = $("input[type='hidden'][id$='IDProveedor']").val();
            var Gen = $("input[type='hidden'][id$='Generador']").val();
            if ($("#AlmacenId1").val() == 'Soluglob') {
                var Almacen = 1;
            } else {
                var Almacen = 4;
            }
            var CantTot = 0;
            var lineas = 0;
            Query += "EXECUTE BLOCK AS BEGIN\n";
            table.rows().eq(0).each(function (index) {
                 var row = table.row(index);
                 var data = row.data();
                 var clave = data.Clave;
                 var Descripcion = data.Descripcion;
                 var Cantidad = table.cell(index, 2).nodes().to$().find('input').val();
                 CantTot = CantTot + Cantidad;
                 lineas = lineas + 1;
                 if (Cantidad > 0) {
                    Query += "INSERT INTO PEDIDOS (NOPEDIDO,CLAVE,CANTIDADPED,CONTRATO,FECHAPEDIDO,COMPANIA, CANCELADO, OBSERVACION, ALMACEN, PROVEEDOR, CANTIDADREC, CANTIDADPEND, DIASRETRASO, MONTOPENALIZACION)\n" +
                        "VALUES('" + Clasif + IdProv + Tipo + "E-4" + Gen + "','" + clave + "','" + Cantidad + "','" + $("#ContratoId1").val() + "',CURRENT_TIMESTAMP,4,2,'" + $("#motivo_pedido").val() + "','" + Almacen + "','" + $("#ProveedorId1").val() + "',0,'" + Cantidad + "',0,0);\n";
                    total_claves++;
                 }
            })
            if (total_claves > 0) {
                Query += "INSERT INTO AUTORIZAR_PEDIDOS (NOPEDIDO,PIEZAS,CONTRATO,FECHAPEDIDO, COMPANIA, STATUS, OBSERVACION, ALMACEN, PROVEEDOR, CLAVES)\n" +
                    "VALUES('" + Clasif + IdProv + Tipo + "E-4" + Gen + "','" + CantTot + "','" + $("#ContratoId1").val() + "',CURRENT_TIMESTAMP,4,2,'" + $("#motivo_pedido").val() + "','" + Almacen + "','" + $("#ProveedorId1").val() + "','" + lineas + "');\n";
                Query += "END";
                return Query;
            } else {
                return "";
            }

        },
        g = function (Command, Control, IdControl) {
            $.ajax({
                cache: false,
                type: "POST",
                url: "/AjaxQuerys/AjaxResponse.aspx/" + Command,
                data: JSON.stringify({ "NombreTabla": NameTable, "Contrato": dllContrato, "Proveedor": dllProveedor }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {                  
                    $("input[type='hidden'][id$='" + Control + "']").val(response.d);
                    return Command;
                }

                //,
                //failure: function (response) {
                //    b(Command, IdControl, Tabla);
                //}
            });
        },

        o = function(IdControl) {
            document.getElementById(IdControl).style.display = "none";
        },
        m = function (IdControl) {
            document.getElementById(IdControl).style.display = "block";
        },

        Funct = function () {
            $(".ReloadDataTable").change(function () {
                a(this.id, 1);
            });
            $(".ReloadDataTableP").change(function () {

                a(this.id, 2);
            });

            $(".ReloadDataTableB").click(function () {
                a(this.id, 3);
            });

            $(".guardar").click(function () {
                
                dllAlmacen = document.getElementById("AlmacenId1") ? $('select[id=AlmacenId1]').val() : null;
                dllProveedor = document.getElementById("ProveedorId1") ? $('select[id=ProveedorId1]').val() : null;
                dllContrato = document.getElementById("ContratoId1") ? $('select[id=ContratoId1]').val() : null;
                dllMotivo = document.getElementById("motivo_pedido") ? $('input[id=motivo_pedido]').val() : null;

                if (dllAlmacen == "") {
                    m("alert-Almacen");
                    return;
                } else {
                    o("alert-Almacen");
                }

                if (dllProveedor == "") {
                    m("alert-Proveedor");
                } else {
                    o("alert-Proveedor");
                }

                if (dllContrato == "") {
                    m("alert-Contrato");
                } else {
                    o("alert-Contrato");
                }

                if (dllMotivo == "") {
                    m("alert-Motivo");
                } else {
                    o("alert-Motivo");
                }

                if(dllAlmacen != "" && dllProveedor != "" && dllContrato != "" && dllMotivo != ""){
                    var Query = f();
                    if (Query != "" && Query != null) {

                        swal({
                            title: "Esta seguro que desea Crear el Pedido?",
                            type: "info",
                            showCancelButton: true,
                            confirmButtonText: "Si, Autorizar",
                            closeOnConfirm: false
                            //   alert(Query);
                        },
                            function () {
                                $.ajax({
                                    cache: false,
                                    type: "POST",
                                    url: "/AjaxQuerys/AjaxResponse.aspx/SubirPedido",
                                    data: JSON.stringify({ "Query": Query }),
                                    contentType: "application/json; charset=utf-8",
                                    dataType: "json",
                                    success: function (response) {
                                        swal("El pedido ha sido Generado");
                                        $("input[type='hidden'][id$='Generador']").val("")
                                        $('#ventana1').modal('toggle');
                                        a("", 1);
                                    },
                                    failure: function (response) {
                                        swal("Error", "Error al Generar el Pedido", "warning");
                                    }
                                });
                            });
                    } else {
                        m("alert-Cantidad");
                        o("alert-Cantidad1");
                    }
                }
            });
        };
    return { init: function () { a("dpRange", Tabla), Funct() } }
}();
App.isAngularJsApp() === !1 && jQuery(document).ready(function () { Contrato.init() });
$("#TableMonto tbody").on("click", "ae", function () {
    var e = $(this).attr("data-action");
    var butt = this,
        cell = butt.parentElement,
        row = cell.parentElement,
        firstCell = row.querySelectorAll('td');
    var NameTable, dllProveedor, dllContrato, dllPedido, dllAlmacen, dllAutorizante;
    var IsRequest = false;
    dllAlmacen = firstCell[1].innerHTML;
    dllPedido = firstCell[2].innerHTML;
    dllProveedor = firstCell[3].innerHTML;
    dllContrato = firstCell[4].innerHTML;

    if (e == 0) {

        var a = function (IdControl,Tabla) {

            if (IsRequest == false) {
                IsRequest = true;
                NameTable = window.location.pathname.split('/').length > 2 ? window.location.pathname.split('/')[2].toLowerCase() : "";
                if (Tabla == 1) {
                    b("GetDetalle", IdControl, Tabla);
                } else {
                    b("GetTablaClaves", IdControl, Tabla);
                }
            }
        },
            b = function (Command, IdControl, Tabla) {
                switch (Command) {
                    case "GetDetalle":
                        var DataColums = [{ data: "Fecha" }, { data: "Almacen" }, { data: "Pedido" }, { data: "Proveedor" }, { data: "Contrato" }, { data: "Clave" }, { data: "Descripcion" }, { data: "Piezas" }];
                        d("GetDetallePedidos", $("#TableDetalle"), DataColums, 7);
                        break;
                    case "GetTablaClaves":
                        var DataColums = [{ data: "Clave" }, { data: "Descripcion" },{ data: "Cantidad" }];
                        d("CargaClaves", $("#TableClaves"), DataColums, 3);
                        break;
                    default:
                        App.unblockUI("#Entradas_Portlet");
                        IsRequest = false;
                        break;
                }
            },
            c = function (Command, Control, IdControl, Tabla) {
                $.ajax({
                    cache: false,
                    type: "POST",
                    url: "/AjaxQuerys/AjaxResponse.aspx/" + Command,
                    data: JSON.stringify({ "NombreTabla": NameTable, "Pedido": dllPedido, "Proveedor": dllProveedor, "Almacen": dllAlmacen, "Contrato": dllContrato }),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        Control.html('');
                        Control.append($('<option></option>').val("").html("Select"));
                        $.each(response.d, function (id, option) {
                            Control.append($('<option></option>').val(option.Id).html(option.Name));
                        });
                        b(Command, IdControl, Tabla);
                    },
                    failure: function (response) {
                        b(Command, IdControl, Tabla);
                    }
                });
            },
            d = function (Command, Control, DataColumns, NumColumn, Tabla) {
                Control.DataTable().destroy();
                Control.DataTable({
                    drawCallback: function (settings) {
                        if (settings.jqXHR != null) {
                            b(Command, Tabla);
                        }
                    },
                    ajax:
                        {
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            url: "/AjaxQuerys/AjaxResponse.aspx/" + Command,
                            dataSrc: "d",
                            async: false,
                            data: function (data) {
                                return JSON.stringify({ "NombreTabla": NameTable, "Pedido": dllPedido, "Proveedor": dllProveedor, "Almacen": dllAlmacen, "Contrato": dllContrato });
                               
                            }
                        },
                    language:
                        {
                            aria:
                                {
                                    sortAscending: ": activar para ordenar la columna ascendente",
                                    sortDescending: ": activar para ordenar la columna descendente"
                                },
                            emptyTable: "No hay datos disponibles en la tabla",
                            info: "Resultado: _START_ al _END_ de _TOTAL_ entradas",
                            infoEmpty: "Entradas no encontradas",
                            infoFiltered: "(filtrada de _MAX_ entradas totales)",
                            lengthMenu: "_MENU_",
                            search: "Buscar:",
                            zeroRecords: "No se encontraron registros coincidentes",
                            paginate:
                                {
                                    previous: "Anterior",
                                    next: "Siguiente",
                                    last: "Último",
                                    first: "Primero"
                                }
                        },
                    columns: DataColumns,
                    buttons: [{
                        extend: 'excel',

                        customize: function (xlsx) {
                            var sheet = xlsx.xl.worksheets['sheet1.xml'];
                        }
                    }
                    ],
                    pagingType: "full_numbers",
                    responsive: !1,
                    order: [[0, "asc"]],
                    lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "Todo"]],
                    pageLength: 10
                });

            };
        a("control",1);

        $("#TableDetalle").DataTable().button("0").trigger();
    } else {
        if (e == 1) {
            swal({
                title: "Esta seguro que desea Cancelar el Pedido?",
                text: "Tendra que crear un Nuevo Pedido",
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Si, Cancelar",
                closeOnConfirm: false
            },
                function () {
                    $.ajax({
                        cache: false,
                        type: "POST",
                        url: "/AjaxQuerys/AjaxResponse.aspx/CancelaPedido",
                        data: JSON.stringify({ "Pedido": dllPedido, "Proveedor": dllProveedor, "Almacen": dllAlmacen, "Contrato": dllContrato }),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (response) {
                            $("#TableMonto").DataTable().button("5").trigger();
                            swal("El pedido ha sido Cancelado");

                        },
                        failure: function (response) {
                            swal("Error", "Error al Cancelar el Pedido", "warning");
                        }
                    });
                });
        } else {
            if (e == 2) {
                swal({
                    title: "Esta seguro que desea Autorizar el Pedido?",
                    type: "info",
                    showCancelButton: true,
                    confirmButtonText: "Si, Autorizar",
                    closeOnConfirm: false
                },
                function () {
                    $.ajax({
                        cache: false,
                        type: "POST",
                        url: "/AjaxQuerys/AjaxResponse.aspx/AutorizaPedido",
                        data: JSON.stringify({ "Pedido": dllPedido, "Proveedor": dllProveedor, "Almacen": dllAlmacen, "Contrato": dllContrato }),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (response) {
                            $("#TableMonto").DataTable().button("5").trigger();
                            swal("El pedido ha sido Autorizado");

                        },
                        failure: function (response) {
                            swal("Error", "Error al Autorizar el Pedido", "warning");
                        }
                    });
                });
            }
        }
    }
});




