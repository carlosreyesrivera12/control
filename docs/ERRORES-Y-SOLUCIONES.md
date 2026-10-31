# Errores y soluciones
- 2026-10-27 · Nodo nuevo en RTDB denegado por las reglas cerradas → cada nodo nuevo bajo `cu1/` necesita su regla; MIBA cae a localStorage y avisa si no tiene permiso.
- 2026-10-31 · RTDB convierte objetos con claves numéricas (salas 111…) en arrays → CCIB guarda reglas y pedidos como JSON en texto (`j`).
- 2026-10-31 · CCIB: ajuste a 0 personas se ignoraba (comprobación «truthy») → comparar con `!= null`.
- 2026-10-31 · CCIB: horario por defecto de desmontaje nocturno inventado → por defecto de día; los horarios los fija CR.
