export interface ReadwiseResponse {
    id:               number;
    topic:            string;
    levelB2:          string;
    levelC2:          string;
    difficultWordsB2: DifficultWords[];
    difficultWordsC2: DifficultWords[];
    audioB2Url:       string;
    audioC2Url:       string;
    language:         string;
    date:             Date;
}

export interface DifficultWords {
    word:        string;
    translation: string;
}
