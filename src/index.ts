import { z } from "zod";
import { fake, install } from "zod-schema-faker";

const stringSchema = z.string().toUpperCase();

install();
console.log(fake(stringSchema));
