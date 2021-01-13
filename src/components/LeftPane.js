import React from 'react'
import "./LeftPane.css";
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from '@material-ui/icons/Delete';
import ColorLensIcon from "@material-ui/icons/ColorLens";
import { useStateValue } from "../StateProvider";
import uuid from "react-uuid";
import { actionTypes } from "../reducer";

function LeftPane() {
    const [{ array, weekday }, dispatch] = useStateValue();
    const addContent = () => {
        dispatch({
            type: actionTypes.ADD_CONTENT,
            data: {
                id: uuid(),
                date: new Date(),
                content: "",
                color: "yellow",
                selected: true
            },
        });
    };
    const selectContent = (id) => {
        dispatch({
            type: actionTypes.SELECT_CONTENT,
            id: id,
        });
    };

    const deleteContent = (id) => {
        dispatch({
            type: actionTypes.DELETE_CONTENT,
            id: id,
        });
    };
    return (
        <div className="leftpane">
            <div className="leftpane__header">
                <div className="leftpane__headersearch">
                    <SearchIcon className="search__inputIcon" />
                    <input placeholder="Sticky notes search"></input>
                </div>
                <Tooltip title="Add" aria-label="add">
                    <IconButton onClick={addContent}>
                        <AddIcon
                            className="leftpane__headerIconButton" />
                    </IconButton>
                </Tooltip>
            </div>
            {
                array.map((data, index) => (
                    <div
                        onClick={(event) => {
                            event.preventDefault();
                            selectContent(data.id);
                        }}
                        className="leftpane__content">
                        <div className="leftpane__contentData">
                            <div className={data.selected
                                ? "leftpane__contentDataColorWide"
                                : "leftpane__contentDataColor"
                            }
                            ></div>
                            <div className="leftpane__contentDataDate">
                                <div className="nohover">
                                    {weekday[data.date.getDay()]}, {data.date.getDate()} /
                            {data.date.getMonth() + 1}
                                </div>
                                <div className="hover">
                                    <IconButton className="hover__button"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            deleteContent(data.id);
                                        }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                    <ColorLensIcon />
                                </div>
                            </div>
                            <div className="leftpane__contentDataText">{data.content}</div>
                        </div>
                    </div>

                ))}
        </div>
    )
}

export default LeftPane;
