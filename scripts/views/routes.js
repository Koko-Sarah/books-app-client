
'use strict';

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage));

//page('/books/:book_id/update', (ctx, next) => app.Book.fetchOne(ctx, next), ctx => app.bookView.initUpdateBook (ctx));
page('/books/:id/update', (ctx, next) => app.Book.fetchOne(ctx.params.id, () => app.bookView.initUpdateBook(ctx.params.id, next)));

page('/books/:id', (ctx, next) => app.Book.fetchOne(ctx.params.id, () => app.bookView.initBookDetails(ctx.params.id, next)));

//page('/books/:id', ctx => app.Book.fetchOne(ctx.params.id, app.bookView.initBookDetails));

page('/form', app.bookView.initNewBookPage);

// page('/books/:id/update' , (ctx, next) => app.Book.fetchOne(ctx, next), ctx => app.bookView.initUpdateBook(ctx)
// );

page();
