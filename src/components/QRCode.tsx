import { QRCodeImg } from '@cheprasov/react-qrcode';

interface props {
    url: string;
}

function QRcode (props:any) {

    return (
        <QRCodeImg value={props.url} />
    );
}
export default QRcode;