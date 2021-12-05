const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  isCompany: {
    type: Boolean,
  },
  donations: {
    PAPERS: {
      Newspapers: {
        target: {
          type: Number,
          default: 0,
        },
        fullfilled: {
          type: Number,
          default: 0,
        },
      },
      Books: {
        target: {
          type: Number,
          default: 0,
        },
        fullfilled: {
          type: Number,
          default: 0,
        },
      },
      Magazines: {
        target: {
          type: Number,
          default: 0,
        },
        fullfilled: {
          type: Number,
          default: 0,
        },
      },
    },
    METALS: {
      Aluminium: {
        target: {
          type: Number,
          default: 0,
        },
        fullfilled: {
          type: Number,
          default: 0,
        },
      },
      Zinc: {
        target: {
          type: Number,
          default: 0,
        },
        fullfilled: {
          type: Number,
          default: 0,
        },
      },
      Steel: {
        target: {
          type: Number,
          default: 0,
        },
        fullfilled: {
          type: Number,
          default: 0,
        },
      },
    },
    PLASTICS: {
      Plasticbags: {
        target: {
          type: Number,
          default: 0,
        },
        fullfilled: {
          type: Number,
          default: 0,
        },
      },
      Polythene: {
        target: {
          type: Number,
          default: 0,
        },
        fullfilled: {
          type: Number,
          default: 0,
        },
      },
    },
    "E-WASTE": {
      Mobile: {
        target: {
          type: Number,
          default: 0,
        },
        fullfilled: {
          type: Number,
          default: 0,
        },
      },
      Tv: {
        target: {
          type: Number,
          default: 0,
        },
        fullfilled: {
          type: Number,
          default: 0,
        },
      },
      Laptop: {
        target: {
          type: Number,
          default: 0,
        },
        fullfilled: {
          type: Number,
          default: 0,
        },
      },
    },
  },
});

module.exports = mongoose.model("company", companySchema);
