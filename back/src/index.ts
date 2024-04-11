import server from "./server";
import { PORT } from "./config/envs"

server.listen(PORT,()=>{
    console.log(`Services on PORT ${PORT}`);
})