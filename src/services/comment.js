import http from "../util/http-common";

class CommentServices {
	getAll() {
		return http.get("/comments?_order=desc&_sort=id");
	}

	get(commentId) {
		return http.get(`comments/${commentId}`);
	}

	create(comment) {
		return http.post("/comments", comment);
	}

	update(commentId, updatedComment) {
		return http.put(`/comments/${commentId}`, updatedComment);
	}

	delete(commentId) {
		return http.delete(`/comments/${commentId}`);
	}
}

export default new CommentServices()