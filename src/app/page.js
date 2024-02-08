const getMembers = async () => {
    try {
        const response = await fetch('http://localhost:3030');
        if (!response.ok) {
            throw new Error('データの取得に失敗しました');
        }

        const fetchedData = await response.json();

        console.log('取得したデータ:', fetchedData);

        // 必要に応じてここで取得したデータを返すことができます
        return fetchedData;
    } catch (error) {
        console.error('データの取得エラー:', error);
    }
};

const FrontList = async () => {
    try {
        // 非同期関数の解決を待ちます
        const Front = await getMembers();

        // 'members'がundefinedでないか確認してからプロパティにアクセスします
        if (Front) {
            return (
                <h1>{Front.message}</h1>
            );
        } else {
            return <h1>データがありません</h1>;
        }
    } catch (error) {
        console.error('エラーが発生しました:', error);
    }
};

export default FrontList;