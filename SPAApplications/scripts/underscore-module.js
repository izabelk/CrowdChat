define(['underscore'], function (_) {

    function getELementsByCount(posts, count) {
        return _.last(posts, count);
    }

    function getElementsByName(posts, name) {
        return _.where(posts, { by: name });
    }

    return {
        getElementsByCount: getELementsByCount,
        getElementsByName: getElementsByName
    };

});