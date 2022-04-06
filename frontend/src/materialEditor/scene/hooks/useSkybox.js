import useTextures from "../../object/textures/useTextures";

const useSkybox = () => {
  const { getCubeTexture } = useTextures();
  const getSkyBox = async () => {
    const skyBox = await getCubeTexture();
    return { skyBox };
  };

  return { getSkyBox };
};

export default useSkybox;
