import { Button } from "./Button";

interface SideBarProps {
  selectedGenreId: number;
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>

  handleClickButton: Function

}


export function SideBar(props:SideBarProps) {

  function handleClick(id: number) {
    props.handleClickButton(id);
  }

  return (
  <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {props.genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClick(genre.id)}
          selected={props.selectedGenreId === genre.id}
        />
      ))}
    </div>
  </nav>
  )
}