import { v4 as uuidv4 } from "uuid";
import mockCar1 from "assets/images/car_1.png";
import mockCar2 from "assets/images/car_2.png";
import mockCar3 from "assets/images/car_3.png";
import mockCar4 from "assets/images/car_4.png";
import mockCar5 from "assets/images/car_5.png";
import mockCar6 from "assets/images/car_6.png";

export const mockedCars = [
  {
    id: uuidv4(),
    colorTitle: "green",
    img: mockCar1,
    progress: {
      actual: 8,
      total: 10,
      date: "08/11/21",
      color: "yellow"
    },
    planned: {
      datePlanned: "08/11/21",
      daysLeft: 4
    },
    parts: {
      partsToMaintenance: 2,
      color: "yellow"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "black",
    img: mockCar2,
    progress: {
      actual: 3,
      total: 5,
      date: "10/11/21",
      color: "red"
    },
    planned: {
      datePlanned: "11/11/21",
      daysLeft: 7
    },
    parts: {
      partsToMaintenance: 3,
      color: "red"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "white",
    img: mockCar3,
    progress: {
      actual: 0,
      total: 4,
      date: "01/12/21",
      color: "green"
    },
    planned: {
      datePlanned: "01/12/21",
      daysLeft: 24
    },
    parts: {
      partsToMaintenance: 4,
      color: "yellow"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "red",
    img: mockCar4,
    progress: {
      actual: 6,
      total: 6,
      date: "09/11/21",
      color: "green"
    },
    planned: {
      datePlanned: "09/11/21",
      daysLeft: 5
    },
    parts: {
      partsToMaintenance: 0,
      color: "green"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "gray",
    img: mockCar5,
    progress: {
      actual: 7,
      total: 8,
      date: "21/12/21",
      color: "yellow"
    },
    planned: null,
    parts: null
  },
  {
    id: uuidv4(),
    colorTitle: "black",
    img: mockCar6,
    progress: null,
    planned: {
      datePlanned: "22/12/21",
      daysLeft: 30
    },
    parts: {
      partsToMaintenance: 6,
      color: "yellow"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "green",
    img: mockCar1,
    progress: {
      actual: 8,
      total: 10,
      date: "08/11/21",
      color: "yellow"
    },
    planned: {
      datePlanned: "08/11/21",
      daysLeft: 4
    },
    parts: {
      partsToMaintenance: 2,
      color: "yellow"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "black",
    img: mockCar2,
    progress: {
      actual: 3,
      total: 5,
      date: "10/11/21",
      color: "red"
    },
    planned: {
      datePlanned: "11/11/21",
      daysLeft: 7
    },
    parts: {
      partsToMaintenance: 3,
      color: "red"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "white",
    img: mockCar3,
    progress: {
      actual: 0,
      total: 4,
      date: "01/12/21",
      color: "green"
    },
    planned: {
      datePlanned: "01/12/21",
      daysLeft: 24
    },
    parts: {
      partsToMaintenance: 4,
      color: "yellow"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "red",
    img: mockCar4,
    progress: {
      actual: 6,
      total: 6,
      date: "09/11/21",
      color: "green"
    },
    planned: {
      datePlanned: "09/11/21",
      daysLeft: 5
    },
    parts: {
      partsToMaintenance: 0,
      color: "green"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "gray",
    img: mockCar5,
    progress: {
      actual: 7,
      total: 8,
      date: "21/12/21",
      color: "yellow"
    },
    planned: null,
    parts: null
  },
  {
    id: uuidv4(),
    colorTitle: "black",
    img: mockCar6,
    progress: null,
    planned: {
      datePlanned: "22/12/21",
      daysLeft: 30
    },
    parts: {
      partsToMaintenance: 6,
      color: "yellow"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "green",
    img: mockCar1,
    progress: {
      actual: 8,
      total: 10,
      date: "08/11/21",
      color: "yellow"
    },
    planned: {
      datePlanned: "08/11/21",
      daysLeft: 4
    },
    parts: {
      partsToMaintenance: 2,
      color: "yellow"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "black",
    img: mockCar2,
    progress: {
      actual: 3,
      total: 5,
      date: "10/11/21",
      color: "red"
    },
    planned: {
      datePlanned: "11/11/21",
      daysLeft: 7
    },
    parts: {
      partsToMaintenance: 3,
      color: "red"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "white",
    img: mockCar3,
    progress: {
      actual: 0,
      total: 4,
      date: "01/12/21",
      color: "green"
    },
    planned: {
      datePlanned: "01/12/21",
      daysLeft: 24
    },
    parts: {
      partsToMaintenance: 4,
      color: "yellow"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "red",
    img: mockCar4,
    progress: {
      actual: 6,
      total: 6,
      date: "09/11/21",
      color: "green"
    },
    planned: {
      datePlanned: "09/11/21",
      daysLeft: 5
    },
    parts: {
      partsToMaintenance: 0,
      color: "green"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "gray",
    img: mockCar5,
    progress: {
      actual: 7,
      total: 8,
      date: "21/12/21",
      color: "yellow"
    },
    planned: null,
    parts: null
  },
  {
    id: uuidv4(),
    colorTitle: "black",
    img: mockCar6,
    progress: null,
    planned: {
      datePlanned: "22/12/21",
      daysLeft: 30
    },
    parts: {
      partsToMaintenance: 6,
      color: "yellow"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "green",
    img: mockCar1,
    progress: {
      actual: 8,
      total: 10,
      date: "08/11/21",
      color: "yellow"
    },
    planned: {
      datePlanned: "08/11/21",
      daysLeft: 4
    },
    parts: {
      partsToMaintenance: 2,
      color: "yellow"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "black",
    img: mockCar2,
    progress: {
      actual: 3,
      total: 5,
      date: "10/11/21",
      color: "red"
    },
    planned: {
      datePlanned: "11/11/21",
      daysLeft: 7
    },
    parts: {
      partsToMaintenance: 3,
      color: "red"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "white",
    img: mockCar3,
    progress: {
      actual: 0,
      total: 4,
      date: "01/12/21",
      color: "green"
    },
    planned: {
      datePlanned: "01/12/21",
      daysLeft: 24
    },
    parts: {
      partsToMaintenance: 4,
      color: "yellow"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "red",
    img: mockCar4,
    progress: {
      actual: 6,
      total: 6,
      date: "09/11/21",
      color: "green"
    },
    planned: {
      datePlanned: "09/11/21",
      daysLeft: 5
    },
    parts: {
      partsToMaintenance: 0,
      color: "green"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "gray",
    img: mockCar5,
    progress: {
      actual: 7,
      total: 8,
      date: "21/12/21",
      color: "yellow"
    },
    planned: null,
    parts: null
  },
  {
    id: uuidv4(),
    colorTitle: "black",
    img: mockCar6,
    progress: null,
    planned: {
      datePlanned: "22/12/21",
      daysLeft: 30
    },
    parts: {
      partsToMaintenance: 6,
      color: "yellow"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "green",
    img: mockCar1,
    progress: {
      actual: 8,
      total: 10,
      date: "08/11/21",
      color: "yellow"
    },
    planned: {
      datePlanned: "08/11/21",
      daysLeft: 4
    },
    parts: {
      partsToMaintenance: 2,
      color: "yellow"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "black",
    img: mockCar2,
    progress: {
      actual: 3,
      total: 5,
      date: "10/11/21",
      color: "red"
    },
    planned: {
      datePlanned: "11/11/21",
      daysLeft: 7
    },
    parts: {
      partsToMaintenance: 3,
      color: "red"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "white",
    img: mockCar3,
    progress: {
      actual: 0,
      total: 4,
      date: "01/12/21",
      color: "green"
    },
    planned: {
      datePlanned: "01/12/21",
      daysLeft: 24
    },
    parts: {
      partsToMaintenance: 4,
      color: "yellow"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "green",
    img: mockCar1,
    progress: {
      actual: 8,
      total: 10,
      date: "08/11/21",
      color: "yellow"
    },
    planned: {
      datePlanned: "08/11/21",
      daysLeft: 4
    },
    parts: {
      partsToMaintenance: 2,
      color: "yellow"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "black",
    img: mockCar2,
    progress: {
      actual: 3,
      total: 5,
      date: "10/11/21",
      color: "red"
    },
    planned: {
      datePlanned: "11/11/21",
      daysLeft: 7
    },
    parts: {
      partsToMaintenance: 3,
      color: "red"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "white",
    img: mockCar3,
    progress: {
      actual: 0,
      total: 4,
      date: "01/12/21",
      color: "green"
    },
    planned: {
      datePlanned: "01/12/21",
      daysLeft: 24
    },
    parts: {
      partsToMaintenance: 4,
      color: "yellow"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "black",
    img: mockCar2,
    progress: {
      actual: 3,
      total: 5,
      date: "10/11/21",
      color: "red"
    },
    planned: {
      datePlanned: "11/11/21",
      daysLeft: 7
    },
    parts: {
      partsToMaintenance: 3,
      color: "red"
    }
  },
  {
    id: uuidv4(),
    colorTitle: "white",
    img: mockCar3,
    progress: {
      actual: 0,
      total: 4,
      date: "01/12/21",
      color: "green"
    },
    planned: {
      datePlanned: "01/12/21",
      daysLeft: 24
    },
    parts: {
      partsToMaintenance: 4,
      color: "yellow"
    }
  }
];
