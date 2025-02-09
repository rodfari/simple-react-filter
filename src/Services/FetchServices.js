const localdata = '/Data/list.json';

export const chamarEndpoint = async () => {
    const ee = await fetch(localdata);
    const json = await ee.json();
    return json;
}
export const GetEndpointById = async (params) => {
    const { id }  = params.params;
    const ee = await fetch(localdata);
    const json = await ee.json();
    const obj = json.find((x) => x.Id === Number.parseInt(id));
    return obj
}
