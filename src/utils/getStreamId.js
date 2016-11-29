export default function getStreamId(){
  return document.location.hash.replace('#', '');
}
