const axios = require('axios'); // 1

const cheerio = require('cheerio'); // 1

export default async (req, res) => {
  // 2
    // 3
    var location = 'ca--san-francisco';
    var query = 'gala';
    var URL = `https://www.eventbrite.com/d/${location}/${query}/?page=1&start_date=2021-06-01&end_date=2021-06-01`;

    try {
      // 4
      const response = await axios(URL);
      const htmlString = await response.data;
      const $ = cheerio.load(htmlString);


      let events: any[] = [];
      $('.search-event-card-wrapper').each((i, elem) => {
        var linkie = $(elem).find('.search-event-card-rectangle-image .eds-event-card-content__action-link').attr('href');
        var pieces = linkie.split('?')[0].split('-');
        var id = pieces[pieces.length - 1];

        events.push({
          name: $(elem).find('.search-event-card-rectangle-image .eds-event-card__formatted-name--is-clamped').text(),
          date: $(elem).find('.search-event-card-rectangle-image .eds-evet-card-content__sub-title').text(),
          location: $(elem).find('.search-event-card-rectangle-image .eds-event-card-content__sub').text(),
          link: linkie,
          id: id,
        });
      });

      res.statusCode = 200;
      return res.json({
        events: events
      });
    } catch (e) {
      // 5
      console.log(e);
      res.statusCode = 404;
      return res.json({
        followerCount: -1,
      });
    }
};
