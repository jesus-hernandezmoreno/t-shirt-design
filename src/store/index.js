import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#18212a',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './wizard.png',
  fullDecal: './pattern.png'
});

export default state;
