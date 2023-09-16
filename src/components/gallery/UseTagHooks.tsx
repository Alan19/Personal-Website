// noinspection JSIgnoredPromiseFromCall

import axios, {AxiosResponse} from "axios";
import {useSearchParams} from "react-router-dom";
import {ArtTag, ImageData} from "../ImageData";
import {TagState} from "./Gallery";
import {useEffect, useState} from "react";

export function useTagHooks() {
    const [tagURLParam, setTagURLParams] = useSearchParams();


    const [imageData, setImageData] = useState<ImageData[]>([]);

    /**
     * Deserializes the tag state from the URL params, basically converts the url a tagstate, with anything that isn't defined in the URL being set to 0
     */
    function getTags(): TagState {
        return Object.values(ArtTag).reduce((previousValue, currentValue) => {
            return {
                ...previousValue,
                [currentValue]: Number(tagURLParam.get(currentValue))
            }
        }, {}) as TagState;
    }

    /**
     * Serializes the changes to the state of tags in the format of {name: -1, 1}. Ignores unselected tags.
     * @param tags The new tag state
     */
    function setTags(tags: TagState) {
        setTagURLParams(Object.values(ArtTag)
            .filter(value => tags[value] !== 0)
            .reduce((previousValue, currentValue) => ({
                ...previousValue,
                [currentValue]: String(tags[currentValue])
            }), {}));
    }

    useEffect(() => {
        loadImageInfo()
    }, [tagURLParam]);

    async function loadImageInfo() {
        const tags = getTags();
        const response: AxiosResponse = await axios.get<ImageData[]>('http://localhost:9000/images/', {params: tags})
        if (response.status === 200) {
            setImageData(response.data)
        }
    }

    return {getTags, setTags, images: imageData, loadImageInfo};
}