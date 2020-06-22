export default function(doc) {
    console.log(doc);
    if (doc.type === 'page') {
        return `/${doc.uid}`;
    }
    return '/';
}
