import { getWeather } from "@/lib/api";
import { AxiosError, AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const data = await getWeather(req.body.params);
        return res.status(200).json(data.data);
    } catch (err) {
        if (err instanceof AxiosError) {
            const resp = err.response as AxiosResponse;
            return res.status(resp.status).json(resp.data);
        }
        return res.status(500).json(null);
    }
};

export default handler;
