type Props = {
  image: string;
};

const Avatar = ({ image }: Props) => (
  // todo: remove height and width
  // eslint-disable-next-line @next/next/no-img-element
  <img src={image} alt="avatar" width={88} height={88} />
);

export default Avatar;
