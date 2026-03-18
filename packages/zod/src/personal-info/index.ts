import { z } from 'zod';

enum GENDER { MALE="MALE", FEMALE="FEMALE", OTHERS="OTHERS" }

export const personalInfoSchema = z.object({
    name: z.string().nonempty(),
    phone: z.string().nonempty(),
    age: z.number().nonnegative(),
    gender: z.enum(GENDER)
})
